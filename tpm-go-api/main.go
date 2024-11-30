package main

import (
	"fmt"

	"github.com/debanjant/tpm-go-api/models"
)

func main() {
	println("Hello, World!")
	User := models.User{
		ID:       1,
		Username: "debanjan",
	}
	line := fmt.Sprintf("User ID: %d, Username: %s", User.ID, User.Username)
	println(line)
}
