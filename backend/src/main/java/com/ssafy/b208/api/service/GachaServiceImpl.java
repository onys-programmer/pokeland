package com.ssafy.b208.api.service;

import com.ssafy.b208.api.db.entity.User;
import com.ssafy.b208.api.db.entity.UserPokemon;
import com.ssafy.b208.api.db.repository.UserPokemonRepository;
import com.ssafy.b208.api.db.repository.UserRepository;
import com.ssafy.b208.api.dto.response.GachaResponseDto;
import com.ssafy.b208.api.exception.LackMoneyException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class GachaServiceImpl implements GachaService {
    private final UserPokemonRepository userPokemonRepository;
    private final UserRepository userRepository;
    private final NftService nftService;
    @Override
    @Transactional
    public GachaResponseDto gacha(String email) {
        User user=userRepository.findOptionalByEmail(email).get();

        if(user.getMoney()>=100){
            user.setMoney(user.getMoney()-100L);
            List<UserPokemon> userPokemonList=userPokemonRepository.findUserPokemonByUserIsNull();
            int randomNumber=(int)(Math.random()*userPokemonList.size());
            UserPokemon userPokemon=userPokemonList.get(randomNumber);
            userPokemon.setUser(user);
            try {
                nftService.minting(user,userPokemon.getIpfsMetaUri());
            }catch (Exception e){
                e.printStackTrace();
            }
            GachaResponseDto gachaResponseDto = GachaResponseDto.builder()
                    .grade(userPokemon.getGrade())
                    .ipfsImageUri(userPokemon.getIpfsImageUri())
                    .ipfsMetaUri(userPokemon.getIpfsMetaUri())
                    .pokeDexId(""+userPokemon.getPokemon().getId())
                    .build();
            userPokemonRepository.save(userPokemon);
            return gachaResponseDto;
        }
        else{
            throw new LackMoneyException(100L);
        }

    }
}
