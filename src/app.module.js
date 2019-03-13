import "./styles.css";

import angular from "angular";

import GreetingsController from "./app/controllers/greetings.controller";

angular.module("angular-es6-starter", [])
	.controller("GreetingsController", GreetingsController);