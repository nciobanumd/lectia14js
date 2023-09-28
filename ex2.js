const year = 240;
const month = 20;
const week = 7;
const day = 1

// 5ani+3luni = 1260 zile
// 3luni+2saptamini = 74 zile 
// 4 saptamini+5zile = 33 zile

const updateyear = 1260;
const updatemonth = 0;
const updateweek = 0;

if(updateyear % year >=1) {
    console.log(`${Math.floor (updateyear/year)}ani ${Math.floor(updateyear%year/month)}luni`);
}else if (updatemonth % month >=1) {
    console.log(`${Math.floor (updatemonth/month)}luni ${Math.floor(updatemonth % month/week)}saptamini`);
}else if (updateweek % week >=1) {
    console.log(`${Math.floor (updateweek/week)}saptamini ${Math.floor(updateweek % week/day)}zile`);
}else {
    console.log("mai putin de o saptamina")
}