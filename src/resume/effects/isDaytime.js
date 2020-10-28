export default function isDaytime(){
    const today = new Date();
    const time = today.getHours()
    const result = time > 6 && time < 18
    return result
}