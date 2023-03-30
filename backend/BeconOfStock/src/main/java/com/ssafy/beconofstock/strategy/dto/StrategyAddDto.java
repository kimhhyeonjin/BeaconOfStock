package com.ssafy.beconofstock.strategy.dto;

import com.ssafy.beconofstock.backtest.dto.ChangeRateDto;
import com.ssafy.beconofstock.strategy.entity.AccessType;
import com.ssafy.beconofstock.strategy.entity.Indicator;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class StrategyAddDto {

    // 전략 이름
    private String title;
    //누적 수익률
    List<ChangeRateDto> strategyValues;
    List<ChangeRateDto> marketValues;
    // 선택한 지표 저장
    List<Long> indicators;

//    private AccessType access;


}
