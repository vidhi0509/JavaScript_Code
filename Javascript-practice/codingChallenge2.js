const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

let scoreDolhins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = (avgDolhins, avgKoalas) => {
    if(avgDolhins >= 2 * avgKoalas){
        console.log(`Dolhins win (${avgDolhins} vs. ${avgKoalas})`);
    }
    else if(avgKoalas >= 2 * avgDolhins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`)
    } else {
        console.log('No team wins..')
    }
}

checkWinner(scoreDolhins, scoreKoalas)

checkWinner(576, 111);