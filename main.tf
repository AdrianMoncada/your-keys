# -------------------------
# Defining AWS provider
# -------------------------
provider "aws" {
  region     = "us-east-2"
  # shared_credentials_file = "~/.aws/crdentials"
  access_key = var.access_key
  secret_key = var.secret_key

}


# ---------------------------------------
# Defining the EC2 backend instance with Ubuntu AMI
# ---------------------------------------
resource "aws_instance" "g8_yk_backend" {
    ami               = var.image_backend
    instance_type     = var.instance_type
    availability_zone = var.avail_zone_back
    #subnet_id = "subnet-0d6e000b09e702b63"
    vpc_security_group_ids = [aws_security_group.security_group_back_g8.id]
    tags = {
      Name = "g8_yk_backend_server"
      Enviroment = "Development"
    }

}

# ---------------------------------------
# Backend Infrastructure - security group
# ---------------------------------------
resource "aws_security_group" "security_group_back_g8" {
  name        = "security_group_back_g8"
  description = "Security Group for Backend"
  vpc_id      = var.vpc_id_backend
  
  ingress {
        cidr_blocks      = ["0.0.0.0/0"]
        #ipv6_cidr_blocks = ["::/0"]
        description      = "Access with the HTTPS protocol"
        from_port        = 443 
        to_port          = 443
        protocol         = "TCP"

  }


}


# ---------------------------------------
# Defining the EC2 frontend instance with Ubuntu AMI
# ---------------------------------------

resource "aws_instance" "g8_yk_frontend" {
    ami               = var.image_frontend
    instance_type     = var.instance_type
    availability_zone = var.avail_zone_front
    #subnet_id = "subnet-072560f4cf7bde247"
    vpc_security_group_ids = [aws_security_group.security_group_front_g8.id]

    tags = {
      Name = "g8_yk_frontend_server"
      Enviroment = "Development"
    }
    
    user_data = <<-EOF
              #!/bin/bash
              echo "Your Keys!" > index.html
              nohup busybox httpd -f -p 8080 &
              EOF

}

# ---------------------------------------
# Frontend Infrastructure - security group
# ---------------------------------------
resource "aws_security_group" "security_group_front_g8" {
  name        = "security_group_front_g8"
  description = "Security Group for Frontend"
  vpc_id      = var.vpc_id_frontend

  ingress {
        cidr_blocks      = ["0.0.0.0/0"]
        #ipv6_cidr_blocks = ["::/0"]
        description      = "Access to port 8080 from outside"
        from_port        = 8080 
        to_port          = 8080
        protocol         = "TCP"

  }

}

# ---------------------------------------
# Defining Bucket Resources
# ---------------------------------------
