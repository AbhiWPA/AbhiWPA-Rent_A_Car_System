package lk.ijse.spring.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CustomerDTO {
    private int id;
    private String name;
    private String pswd;
    private String mail;
    private String contact;
    private String nic;
    private String licence;
}