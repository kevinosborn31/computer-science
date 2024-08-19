function optimalFreelancing(jobs) {
    jobs.sort((a, b) => a.deadline - b.deadline);
  
    let days = new Array(7).fill(0); 
    let maxProfit = 0;
  
    jobs.forEach((job => {
      for (let i = job.deadline - 1; i >= 0; i--) {
        if (days[i] === 0) {
          days[i] = job.payment;
          break;
        }
      }
      
    }))
    
    maxProfit = days.reduce((total, payment) => total + payment, 0);
    return maxProfit;
  }  