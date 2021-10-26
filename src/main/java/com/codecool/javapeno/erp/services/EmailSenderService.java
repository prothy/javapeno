package com.codecool.javapeno.erp.services;

import com.codecool.javapeno.erp.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailSenderService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendEmail(User user) {

        String toEmail = user.getEmail();
        String subject = "First login to the website";
        String body = "Dear " + user.getName() + "!\n" +
                "Welcome to the company, please click on the following link, and change your generated password.\n\n" +
                "[link]\n\n" +
                "Thanks you!\n" +
                "IT team";
        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom("javapeno2021@gmail.com");
        message.setTo(toEmail);
        message.setText(body);
        message.setSubject(subject);

        mailSender.send(message);
    }

}