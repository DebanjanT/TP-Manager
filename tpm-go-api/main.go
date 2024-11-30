package main

import (
	"context"
	"fmt"
	"time"

	"go.mongodb.org/mongo-driver/v2/mongo"
	"go.mongodb.org/mongo-driver/v2/mongo/options"
	"go.mongodb.org/mongo-driver/v2/mongo/readpref"

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
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	client, _ := mongo.Connect(options.Client().ApplyURI("mongodb://localhost:27017"))
	defer func() {
		if err := client.Disconnect(ctx); err != nil {
			panic(err)
		}
	}()
	_ = client.Ping(ctx, readpref.Primary())
}
