const SETTING = {
  MIN_LOTTO_NUMBER: 1,
  MAX_LOTTO_NUMBER: 45,
  LOTTO_LENGTH: 6,
  LOTTO_PRICE: 1_000,
  MIN_RANKING_MATCHING_NUMBER: 3,
  RESTART_COMMAND: 'y',
  EXIT_COMMAND: 'n',
};

const RANKING = {
  6: { MATCHING_COUNT: 6, TITILE: '6개 일치', REWARD: 2_000_000_000 },
  B5: { MATCHING_COUNT: 5, TITILE: '5개 일치, 보너스 볼 일치', REWARD: 30_000_000 },
  5: { MATCHING_COUNT: 5, TITILE: '5개 일치', REWARD: 1_500_000 },
  4: { MATCHING_COUNT: 4, TITILE: '4개 일치', REWARD: 50_000 },
  3: { MATCHING_COUNT: 3, TITILE: '3개 일치', REWARD: 5_000 },
};

export { SETTING, RANKING };
