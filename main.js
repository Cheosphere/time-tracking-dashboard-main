const dataTitle = document.querySelectorAll('.card_activities_data_header_title')
const dataCurrentTime = document.querySelectorAll('.card_activities_data_content_hour')
const dataPreviousTime = document.querySelectorAll('.card_activities_data_content_week')
const periodMenu = document.querySelectorAll('.card_user_period_item')
// console.log(dataTitle)
// console.log(dataCurrentTime)
// console.log(dailyMenu)

const dataRequest = async () => {
    try {
        const URL = './data.json'
        const response = await fetch(URL)
        const data = await response.json()
        // console.log(data[3].timeframes)

        periodMenu.forEach((item, index) => {
            data.forEach((item, index) => {
                dataTitle[index].innerHTML = item.title
                dataCurrentTime[index].innerHTML = `${item.timeframes.weekly.current}hrs`
                dataPreviousTime[index].innerHTML = `Last Week - ${item.timeframes.weekly.previous}hrs`
            });

            item.addEventListener('click', () => {
                if (index === 0) {
                    for (const menu of periodMenu) {
                        menu.classList.remove('period_active')
                    }
                    item.classList.add('period_active')
                    data.forEach((item, index) => {
                        dataTitle[index].innerHTML = item.title
                        dataCurrentTime[index].innerHTML = `${item.timeframes.daily.current}hrs`
                        dataPreviousTime[index].innerHTML = `Last Week - ${item.timeframes.daily.previous}hrs`
                    });
                }
                if (index === 1) {
                    for (const menu of periodMenu) {
                        menu.classList.remove('period_active')
                    }
                    item.classList.add('period_active')
                    data.forEach((item, index) => {
                        dataTitle[index].innerHTML = item.title
                        dataCurrentTime[index].innerHTML = `${item.timeframes.weekly.current}hrs`
                        dataPreviousTime[index].innerHTML = `Last Week - ${item.timeframes.weekly.previous}hrs`
                    });
                }
                if (index === 2) {
                    for (const menu of periodMenu) {
                        menu.classList.remove('period_active')
                    }
                    item.classList.add('period_active')
                    data.forEach((item, index) => {
                        dataTitle[index].innerHTML = item.title
                        dataCurrentTime[index].innerHTML = `${item.timeframes.monthly.current}hrs`
                        dataPreviousTime[index].innerHTML = `Last Week - ${item.timeframes.monthly.previous}hrs`
                    });
                }
            })
        });

    } catch (error) {
        console.log(error)
    }
}

dataRequest()
