provider "aws" {
  region = "eu-west-1"

  version = "2.22.0"
}

terraform {
  required_version = ">= 0.12, < 0.13"
  
  backend "s3" {}
}
