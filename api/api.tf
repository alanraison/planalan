resource "aws_api_gateway_rest_api" "planning_api" {
  name = "planalan-api"
  body = file("${path.module}/openapi.yaml")

  endpoint_configuration {
    types = ["REGIONAL"]
  }
}

resource "aws_api_gateway_stage" "main" {
  stage_name    = "v1"
  rest_api_id   = aws_api_gateway_rest_api.planning_api.id
  deployment_id = aws_api_gateway_deployment.main.id
}

resource "aws_api_gateway_deployment" "main" {
  depends_on  = ["aws_api_gateway_integration.mock"]
  rest_api_id = aws_api_gateway_rest_api.planning_api.id
  stage_name  = "v1"
}
