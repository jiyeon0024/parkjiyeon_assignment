export type BottomChartData = {
  processAnalysis: {
    newSMV: number;
    loss: number;
    productive: number;
    efficiency: number;
    output: number;
    best: {
      sewingTime: number;
      otherTime: number;
    };
    worst: {
      sewingTime: number;
      otherTime: number;
    };
  };
};
