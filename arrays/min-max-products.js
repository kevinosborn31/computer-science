const minimizedMaximum = (n, quantities) => {
        function canDistributeWithMaxProducts(maxProducts) {
            let storesNeeded = 0;
            
            for (const quantity of quantities) {
                storesNeeded += Math.ceil(quantity / maxProducts);
                if (storesNeeded > n) {
                    return false; 
                }
            }
            
            return storesNeeded <= n;
        }
    
        let left = 1;
        let right = Math.max(...quantities);
        let result = right;
    
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            if (canDistributeWithMaxProducts(mid)) {
                result = mid; 
                right = mid - 1; 
            } else {
                left = mid + 1; 
            }
        }
    
        return result;
    
};