package com.example.capstonefullstackapp.Controller;

import com.example.capstonefullstackapp.Model.Category;
import com.example.capstonefullstackapp.Model.Page;
import com.example.capstonefullstackapp.Model.User;
import com.example.capstonefullstackapp.Repository.UserRepository;
import com.example.capstonefullstackapp.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepository;

    @GetMapping
    public ResponseEntity<List<User>>getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok().body(users);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<User> getUserById(Long id) {
        User user = userService.getUser(id);
        return ResponseEntity.ok().body(user);
    }

    @GetMapping("/{userId}/categories")
    public ResponseEntity<List<Category>> getAllCategoriesByUser(@PathVariable Long userId){
        List<Category> categories = userService.getCategoriesByUser(userId);
        return ResponseEntity.ok().body(categories);
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<Long> getUserIdByEmail(@PathVariable String email){
        Long id = userService.getUserIdByEmail(email);
        return ResponseEntity.ok().body(id);
    }

    @PostMapping
    public ResponseEntity<User> addUser(
            @RequestBody User newUser) {
        User user = userService.addNewUser(newUser);
        return ResponseEntity.ok().body(user);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<User> updateUser(
            @PathVariable Long id,
            @RequestBody User updatedUserDetails){
        User updatedUser = userService.updateUser(id, updatedUserDetails);
        return ResponseEntity.ok().body(updatedUser);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteUserById(
            @PathVariable Long id
    ) {
        userService.deleteUserById(id);
        return ResponseEntity.ok("User with id " + id + " has been removed from the database.");
    }


}
