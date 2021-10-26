package com.codecool.javapeno.erp.services;

import com.codecool.javapeno.erp.entities.UserAuthentication;
import com.codecool.javapeno.erp.repositories.UserAuthenticationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserAuthenticationService implements UserDetailsService {
    private final UserAuthenticationRepository userAuthenticationRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        UserAuthentication userAuthentication =
        return null;
    }

    public void registerAuthentication(UserAuthentication userAuthentication) {
        userAuthenticationRepository.save(userAuthentication);
    }
}
