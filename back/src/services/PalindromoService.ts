

interface IPalindromoParms{
    init:string
    end:string
}

function isPalindrome(num:string):boolean {
    let end=num.length-1
    let ini=0
    while(ini<end){
        if(num[ini]!==num[end])
            return false
        ini++
        end--
    }
    return true
    
}
export class PalindromoService{
    execute({init,end}:IPalindromoParms){
        const numsPalindromes=[]
        for(let i=parseInt(init);i<=parseInt(end);++i)
        {
            const num=i.toString()
            if(isPalindrome(num))
                numsPalindromes.push(i)
        }
        return numsPalindromes
    }
}