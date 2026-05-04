package models

import (
	"time"

	"gorm.io/gorm"
)

type TouristType string

const (
	DARK_TOURIST     TouristType = "dark"
	CULTURE_TOURIST  TouristType = "calture"
	ECONOMIC_TOURIST TouristType = "economic"
)

type VisitStatus string

const (
	STATUS_PLAN    VisitStatus = "planned"
	STATUS_VISITED VisitStatus = "visited"
	STATUS_CANCEL  VisitStatus = "cancel"
)

// Site is a place that tourist can visit
type Site struct {
	gorm.Model
	Name        string      `json:"name" gorm:"not null"`
	Slug        string      `json:"slug" gorm:"uniqueIndex;not null"`
	Type        TouristType `json:"type" gorm:"not null"`
	Province    string      `json:"province" gorm:"not null"`
	Description string      `json:"description" gorm:"type:text;not null"`
	History     string      `json:"history" gorm:"type:text"`
	ImageURL    string      `json:"image_url"`
	Latitude    float64     `json:"latitude"`
	Longitude   float64     `json:"longitude"`
	EntryFee    float64     `json:"entry_fee"    gorm:"default:0"`
	OpenHours   string      `json:"open_hours"`
	Tips        string      `json:"tips"         gorm:"type:text"`
	Featured    bool        `json:"featured"     gorm:"default:false"`
	Reviews     []Review    `json:"reviews,omitempty" gorm:"foreignKey:SiteID"`
}

type Review struct {
	gorm.Model
	SiteID  uint   `json:"site_id"`
	UserID  uint   `json:"user_id"`
	User    User   `json:"user"    gorm:"foreignKey:UserID"`
	Rating  int    `json:"rating"  gorm:"not null;check:rating >= 1 AND rating <= 5"`
	Comment string `json:"comment" gorm:"type:text;not null"`
}

type Visit struct {
	gorm.Model
	SiteID    uint        `json:"site_id"`
	Site      Site        `json:"site"        gorm:"foreignKey:SiteID"`
	UserID    uint        `json:"user_id"`
	User      User        `json:"user"        gorm:"foreignKey:UserID"`
	VisitDate time.Time   `json:"visit_date"`
	Notes     string      `json:"notes"       gorm:"type:text"`
	Status    VisitStatus `json:"status"      gorm:"default:'planned'"`
}

//DTOs

type CreateSiteRequest struct {
	Name        string      `json:"name"        binding:"required,min=3"`
	Type        TouristType `json:"type"        binding:"required,oneof=dark cultural eco"`
	Province    string      `json:"province"    binding:"required"`
	Description string      `json:"description" binding:"required,min=20"`
	History     string      `json:"history"`
	ImageURL    string      `json:"image_url"   binding:"omitempty,url"`
	Latitude    float64     `json:"latitude"`
	Longitude   float64     `json:"longitude"`
	EntryFee    float64     `json:"entry_fee"   binding:"min=0"`
	OpenHours   string      `json:"open_hours"`
	Tips        string      `json:"tips"`
	Featured    bool        `json:"featured"`
}

type UpdateSiteRequest = CreateSiteRequest

type CreateReviewRequest struct {
	SiteID  uint   `json:"site_id" binding:"required"`
	Rating  int    `json:"rating"  binding:"required,min=1,max=5"`
	Comment string `json:"comment" binding:"required,min=10"`
}

type CreateVisitRequest struct {
	SiteID    uint      `json:"site_id"    binding:"required"`
	VisitDate time.Time `json:"visit_date" binding:"required"`
	Notes     string    `json:"notes"`
}

type UpdateVisitStatusRequest struct {
	Status VisitStatus `json:"status" binding:"required,oneof=planned visited cancelled"`
}

// ─── Query params ──────────────────────────────────────────────────────────────

type SiteFilter struct {
	Search   string      `form:"search"`
	Type     TouristType `form:"type"`
	Province string      `form:"province"`
	Featured *bool       `form:"featured"`
	Sort     string      `form:"sort"  binding:"omitempty,oneof=created_at name entry_fee"`
	Order    string      `form:"order" binding:"omitempty,oneof=asc desc"`
	Page     int         `form:"page,default=1"  binding:"min=1"`
	Limit    int         `form:"limit,default=12" binding:"min=1,max=50"`
}
