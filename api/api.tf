resource "aws_api_gateway_rest_api" "planning_api" {
  name = "planalan-api"
  body = file("${path.module}/openapi.yaml")

  endpoint_configuration {
    types = ["REGIONAL"]
  }
}

resource "aws_api_gateway_stage" "main" {
  stage_name    = "v1"
  rest_api_id   = "${aws_api_gateway_rest_api.planning_api.id}"
  deployment_id = "${aws_api_gateway_deployment.main.id}"
}

resource "aws_api_gateway_deployment" "main" {
  depends_on  = ["aws_api_gateway_integration.mock"]
  rest_api_id = "${aws_api_gateway_rest_api.planning_api.id}"
  stage_name  = "v1"
}

data "aws_api_gateway_resource" "planned_projects" {
  rest_api_id = "${aws_api_gateway_rest_api.planning_api.id}"
  path        = "/plannedProjects"
}

resource "aws_api_gateway_integration" "mock" {
  rest_api_id = "${aws_api_gateway_rest_api.planning_api.id}"
  resource_id = "${data.aws_api_gateway_resource.planned_projects.id}"
  http_method = "GET"
  type        = "MOCK"
}

# resource "aws_api_gateway_method_response" "response_ok" {
#   rest_api_id = "${aws_api_gateway_rest_api.planning_api.id}"
#   resource_id = "${data.aws_api_gateway_resource.planned_projects.id}"
#   http_method = "GET"
#   status_code = 200
# }

resource "aws_api_gateway_integration_response" "mock" {
  rest_api_id = "${aws_api_gateway_rest_api.planning_api.id}"
  resource_id = "${data.aws_api_gateway_resource.planned_projects.id}"
  http_method = "GET"
  status_code = 200

  response_templates {
    "application/json" = file("${path.module}/mockResponses/plannedProjects.json")
  }
}
