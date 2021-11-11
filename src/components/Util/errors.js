export class AuthenticationError extends Error {
    constructor() {
        super("Error logging you in. Make sure your credentials are correct.")
    }
}

export class AuthorizationError extends Error {
    constructor() {
        super("Error accessing page. Make sure you are logged in.")
    }
}