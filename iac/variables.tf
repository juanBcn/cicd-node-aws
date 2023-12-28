variable "aws_region" {
  description = "The AWS region to create things in."
  default     = "eu-west-1"
}

variable "aws_account_id" {
  description = "AWS account ID"
  default = "569179253601"
}

variable "az_count" {
  description = "Number of AZs to cover in a given AWS region"
  default     = "1"
}

variable "app_name" {
  description = "Name of the application"
  default = "cicd-node-aws"
}