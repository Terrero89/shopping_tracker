package main

import (
	"fmt"
	"github.com/Terrero89/shopping_tracker_be/pkg/config"
	"github.com/gofiber/fiber/v2"
	"log"

	"github.com/Terrero89/shopping_tracker_be/pkg/routes"
)

func main() {

	//init
	cfg, err := config.ConfigInit()
	if err != nil {
		log.Fatalf("Failed to load configuration: %v", err)
	}

	app := fiber.New()
	api := app.Group("/api")
	api.Get("/login", routes.UserLogin)
	api.Get("/profiles", routes.GetProfiles)

	err = app.Listen(":" + cfg.Port)
	if err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
	fmt.Printf("Server is running on port %s", cfg.Port)

	//app.Listen(":8080")
}
