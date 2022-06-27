//package com.example.capstonefullstackapp.Config;
//
//import com.example.capstonefullstackapp.Model.User;
//import com.example.capstonefullstackapp.Repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.ApplicationArguments;
//import org.springframework.boot.ApplicationRunner;
//import org.springframework.context.annotation.Configuration;
//
//import java.util.ArrayList;
//import java.util.List;
//
//    @Configuration
//    public class DBSeeder implements ApplicationRunner {
//
//        @Autowired
//        private UserRepository userRepository;
//
//        @Override
//        public void run(ApplicationArguments args) throws Exception {
//            User user1 = new User("testUser1", "test1@hotmail.com", "test123", new ArrayList<>());
//            User user2 = new User("testUser2", "test2@hotmail.com", "test123", new ArrayList<>());
//
//
//            userRepository.saveAll(List.of(user1, user2));
//
//        }
//    }
//
