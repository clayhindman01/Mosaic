package com.mosaic.mosaicService.controller;

import com.mosaic.mosaicService.modal.User;
import com.mosaic.mosaicService.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/mosaic/api/v1")
public class MosaicController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public List<User> getAllUsers() { return userRepository.findAll(); }

    @GetMapping("/user/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable(value="userId") Long userId) throws Exception {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new Exception("Employee not found with userId = " + userId));
        return ResponseEntity.ok().body(user);
    }

    @DeleteMapping("/user/{userId}")
    public Map<String, Boolean> deleteUser(@PathVariable(value="userId") Long userId) throws Exception {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new Exception("Employee not found with userId = " + userId));
        userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    @PostMapping("/addUser")
    public User createUser(@RequestBody User user) {
        user.setLastTileTime(new Date());
        user.setUserCreated(new Date());
        return userRepository.save(user);
    }
}
