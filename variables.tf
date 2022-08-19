# -------------------------
# Access data
# -------------------------
variable "access_key" {
  type    = string
  default = "AKIASDYGBXDR7MMP6CGB"
}

variable "secret_key" {
  type    = string
  default = "Ujezs83pGK7PQ3zP6Qh7OALs3W42TnrnrYp3wqUD"
}

# -------------------------
# vpc idS
# -------------------------
variable "vpc_id_backend" {
  type    = string
  default = "vpc-0ca9d0ecaec1494da"
}

variable "vpc_id_frontend" {
  type    = string
  default = "vpc-0ca9d0ecaec1494da"
}

# -------------------------
# Instance Type
# -------------------------
variable "instance_type" {
  type    = string
  default = "t2.micro"
}

# ---------------------------------
# Creating the Amazon Machine Image
# ---------------------------------

variable image_backend {
  type    = string
  default = "ami-02f3416038bdb17fb"
}

variable image_frontend {
  type    = string
  default = "ami-02f3416038bdb17fb" 
}


# -------------------------
# Availability Zone
# -------------------------
variable "avail_zone_back" {
  type    = string
  default = "us-east-2a"
}

variable "avail_zone_front" {
  type    = string
  default = "us-east-2a"
}