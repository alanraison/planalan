resource "aws_s3_bucket" "ui" {
  bucket_prefix = "planalan-ui"
  
}

resource "aws_cloudfront_origin_access_identity" "cloudfront_id" {
  comment = "Access to S3 from CloudFront"
}

locals {
  s3_origin_id = "PlanalanOrigin"
}

resource "aws_cloudfront_distribution" "planalan_ui" {
  origin {
    domain_name = aws_s3_bucket.ui.bucket_regional_domain_name
    origin_id = local.s3_origin_id

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.cloudfront_id.cloudfront_access_identity_path
    }
  }

  enabled = true
  is_ipv6_enabled = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods = ["GET", "HEAD", "OPTIONS", "POST"]
    cached_methods = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id
  }

  price_class = "PriceClass_200"

}

data "aws_iam_policy_document" "s3_bucket_policy" {
  statement {
    actions = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.ui.arn}/*"]
    principals {
      type = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.cloudfront_id.iam_arn]
    }
  }
  statement {
    actions = ["s3:ListBucket"]
    resources = aws_s3_bucket.ui.arn
    principals {
      type = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.cloudfront_id.iam_arn]
    }
  }
}

resource "aws_s3_bucket_policy" "cloudfront_read_list" {
  bucket = aws_s3_bucket.ui.id
  policy = data.aws_iam_policy_document.s3_bucket_policy.json
}


