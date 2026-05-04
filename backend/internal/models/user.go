package models

import "gorm.io/gorm"

type UserRole string

const (
	UserRoleAdmin UserRole = "admin"
	UserRoleUser  UserRole = "user"
)

type User struct {
	gorm.Model
	Name  string   `json:"name" gorm:"not null"`
	Email string   `json:"email" gorm:"uniqueIndex;not null"`
	Role  UserRole `json:"role" gorm:"default:user"`
}

//DTO

type RegisterRequest struct {
	Name     string `json:"name"     binding:"required,min=2"`
	Email    string `json:"email"    binding:"required,email"`
	Password string `json:"password" binding:"required,min=6"`
}

type LoginRequest struct {
	Email    string `json:"email"    binding:"required,email"`
	Password string `json:"password" binding:"required"`
}
