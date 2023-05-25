
const Datas = ({ id, label, percentage }) => {
    return (
        <section class="statistics">
            <h2 class="title">{data.id}</h2>

            <ul class="stat-list">
                <li class="item">
                    <span class="label">{data.label}</span>
                    <span class="percentage">{data.percentage}</span>
                </li>
                <li class="item">
                    <span class="label">{data.label}</span>
                    <span class="percentage">{data.percentage}</span>
                </li>
                <li class="item">
                    <span class="label">{data.label}</span>
                    <span class="percentage">{data.percentage}</span>
                </li>
                <li class="item">
                    <span class="label">{data.label}</span>
                    <span class="percentage">{data.percentage}</span>
                </li>
            </ul>
        </section>
    );
}; export default Datas