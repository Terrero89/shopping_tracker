package main

import (
	"github.com/Terrero89/shopping_tracker_be/pkg/routes"
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	api := app.Group("/api")

	api.Get("/login", routes.UserLogin)

	api.Get("/profiles", routes.GetProfiles)

	app.Listen(":8080")
}
