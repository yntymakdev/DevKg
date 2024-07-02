export const JobList = ({
    time,
    advertisementName,
    organizer,
    location,

}: {
    time: number,
    advertisementName: string,
    organizer: string,
    location: string,

}) => {
    return(
    <article className="events-item">
        <a href="dev.kg">
            <div className="events-date">
                <span>
                    <time dateTime="2024-06-10T12:30:00.000z">
                        {/* 8 инюя 2024 
                        <span> 13:00</span> */}
                        {time}
                    </time>
                </span>
            </div>
            <div className="events-info">
                <div className="events-title">
                    {advertisementName}
                </div>

                <div className="events-mate">
                    <div className="events-organizer">
                        <span className="events-label">Организатор</span> <br />
                        {organizer}
                    </div>

                    <div className="events-locate">
                        <span className="events-label">
                            Локация
                        </span>
                        <address>{location}</address>
                    </div>
                </div>

            </div>
        </a>
    </article>
    )
}