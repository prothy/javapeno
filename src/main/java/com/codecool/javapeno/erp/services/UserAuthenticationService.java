package com.codecool.javapeno.erp.services;

import com.codecool.javapeno.erp.entities.User;
import com.codecool.javapeno.erp.entities.UserAuthentication;
import com.codecool.javapeno.erp.repositories.UserAuthenticationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserAuthenticationService implements UserDetailsService {
    private final UserAuthenticationRepository userAuthenticationRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserAuthentication userAuthentication = getAuthenticationByUsername(username);
        User user;

        if (userAuthentication == null) {
            throw new UsernameNotFoundException("User not found in the database");
        }
        else user = userAuthentication.getUser();

        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(user.getPrivilege().toString()));

        return new org.springframework.security.core.userdetails.User(
                userAuthentication.getUsername(),
                userAuthentication.getPassword(),
                authorities);
    }

    public void registerAuthentication(UserAuthentication userAuthentication) {
        userAuthenticationRepository.save(userAuthentication);
    }

    public void createAuthenticationByUser(User user) {
        String randomPassword = UUID.randomUUID().toString();
        UserAuthentication userAuthentication = new UserAuthentication(user, passwordCoder(randomPassword));
        registerAuthentication(userAuthentication);
    }

    public UserAuthentication getAuthenticationByUsername(String userName) {
        return userAuthenticationRepository.findByUsername(userName);
    }

    private String passwordCoder(String hashedPassword) {
        return passwordEncoder.encode(hashedPassword);
    }
}
