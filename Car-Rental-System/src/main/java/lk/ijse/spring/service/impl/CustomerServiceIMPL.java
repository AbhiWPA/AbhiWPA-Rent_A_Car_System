package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class CustomerServiceIMPL implements CustomerService {

    @Autowired
    private CustomerRepo customerRepo;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public void saveCustomer(CustomerDTO dto) {
        if (customerRepo.existsById(dto.getId())){
            throw new RuntimeException("customer"+dto.getId()+"Already Exists");
        }
        customerRepo.save(modelMapper.map(dto, Customer.class));
    }

}
