package com.mosaic.mosaicService.modal;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data
@Entity
@Table(name = "users")
public class User {
    private Long userId;
    private String userHandle;
    private String password;
    private String email;
    private String photoURL;
    private Date userCreated;
    private Date lastTileTime;

    public User() {};

    public User(
            Long userId,
            String userHandle,
            String password,
            String email,
            String photoURL,
            Date userCreated,
            Date lastTileTime

    ) {
        this.userId = userId;
        this.userHandle = userHandle;
        this.password = password;
        this.email = email;
        this.photoURL = photoURL;
        this.userCreated = userCreated;
        this.lastTileTime = lastTileTime;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    @Column(name = "userHandle", nullable = false)
    public String getUserHandle() { return userHandle; }
    public void setUserHandle(String userHandle) { this.userHandle = userHandle; }

    @Column(name = "password", nullable = false)
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    @Column(name = "email", nullable = false)
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    @Column(name = "photoUrl")
    public String getPhotoURL() { return photoURL; }
    public void setPhotoURL(String photoURL) { this.photoURL = photoURL; }

    @Column(name="lastTimeTime")
    public Date getLastTileTime() {
        return lastTileTime;
    }

    @Column(name = "userCreated")
    public Date getUserCreated() {
        return userCreated;
    }

    public void setLastTileTime(Date lastTileTime) {
        this.lastTileTime = lastTileTime;
    }

    public void setUserCreated(Date userCreated) {
        this.userCreated = userCreated;
    }
}
