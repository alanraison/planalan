provider "aws" {
  region  = "eu-west-1"
  version = "2.22.0"
}

resource "aws_api_gateway_rest_api" "planning_api" {
  name = "planalan-api"
  body = file("${path.module}/openapi.yaml")

  endpoint_configuration {
    types = ["REGIONAL"]
  }
}

