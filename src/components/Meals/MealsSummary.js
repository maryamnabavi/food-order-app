import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>غذای لذیذ ، تحویل به شما </h2>
      <p>
      غذای مورد علاقه خود را از میان مجموعه وسیع غذاهای موجود ما انتخاب کنید
        و از یک ناهار یا شام خوشمزه در خانه لذت ببرید.
      </p>
      <p>
      !تمام وعده های غذایی ما با مواد اولیه مرغوب، به موقع و به موقع طبخ می شوند
      ، البته توسط سرآشپزهای با تجربه
      </p>
    </section>
  );
};

export default MealsSummary;
