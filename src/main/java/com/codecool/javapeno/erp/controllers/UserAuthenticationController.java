package com.codecool.javapeno.erp.controllers;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.codecool.javapeno.erp.entities.User;
import com.codecool.javapeno.erp.entities.UserAuthentication;
import com.codecool.javapeno.erp.services.UserAuthenticationService;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.*;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;
import static org.springframework.http.HttpStatus.FORBIDDEN;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;


@RestController
@RequestMapping("/api/user-authentication-service")
@RequiredArgsConstructor
public class UserAuthenticationController {
    private final UserAuthenticationService userAuthenticationService;

//    @PostMapping("/register")
//    public void registerAuthentication(@RequestBody UserAuthentication userAuthentication) {
//        userAuthenticationService.registerAuthentication(userAuthentication);
//    }

    @GetMapping("/user-authentication-data")
    public void userAuthenticationData(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String authorizationHeader = request.getHeader(AUTHORIZATION);
        if (authorizationHeader != null && authorizationHeader.startsWith("Javapeno ")) {
            try {
                String token = authorizationHeader.substring("Javapeno ".length());
                Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
                JWTVerifier verifier = JWT.require(algorithm).build();
                DecodedJWT decodedJWT = verifier.verify(token);
                String username = decodedJWT.getSubject();
                UserAuthentication userAuthentication = userAuthenticationService.getAuthenticationByUsername(username);
                User user = userAuthentication.getUser();

                Map<String, String> userData = new HashMap<>();
                userData.put("user_id", user.getId().toString());
                userData.put("privilege", user.getPrivilege().toString());

                response.setContentType(APPLICATION_JSON_VALUE);
                new ObjectMapper().writeValue(response.getOutputStream(), userData);

            } catch (Exception exception) {
                response.setHeader("error", exception.getMessage());
                response.setStatus(FORBIDDEN.value());
//                    response.sendError(FORBIDDEN.value());
                Map<String, String> error = new HashMap<>();
                error.put("error_message", exception.getMessage());

                response.setContentType(APPLICATION_JSON_VALUE);
                new ObjectMapper().writeValue(response.getOutputStream(), error);
            }
        } else {
            throw new RuntimeException("Token is missing");
        }
    }
}
