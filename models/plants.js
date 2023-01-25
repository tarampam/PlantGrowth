class Plant {
    constructor(
        id,
        title,
        soil,
        position,
        imageUrl,
        humidity,
        grounds,
        requirements,
        usage
    ) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.grounds = grounds;
        this.requirements = requirements;
        this.humidity = humidity;
        this.position = position;
        this.soil = soil;
        this.usage = usage;
    }
}

export default Plant;