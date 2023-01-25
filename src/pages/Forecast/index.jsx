import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";
import { object, number, boolean } from "yup";
import NearbyCard from "../../components/NearbyCard";
import Totals from "../../components/Totals";

const Forecast = () => {
  const [expense, setExpense] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [mainForm, setMainForm] = useState({
    cleaningFee: 0,
    averageNightlyRate: 0,
    cleaningsAmount: 4,
    ownerCleaningCost: 0,
    monthDays: 23,
    landscaping: false,
    poolService: false,
    taxFile: false,
  });
  const [grossIncome, setGrossIncome] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [idCount, setIdCount] = useState(1);

  const validationSchema = object().shape({
    cleaningFee: number().required("This field is required"),
    averageNightlyRate: number().required("This field is required"),
    cleaningsAmount: number().required("This field is required"),
    monthDays: number()
      .min(1)
      .max(30, "Cannot be more than 30 days")
      .required("This field is required"),
    ownerCleaningCost: number()
      .min(
        parseFloat(mainForm?.cleaningFee),
        `Cannot be less than the cleaning fee of $${mainForm?.cleaningFee}`
      )
      .required("This field is required"),
    landscaping: boolean(),
    poolService: boolean(),
    taxFile: boolean(),
  });

  const additionalServices = (ls, ps, tx) => {
    let fee = 0;
    let lsfee = 0;
    let psfee = 0;
    let txfee = 0;
    if (ls === true) {
      lsfee = 175;
    }
    if (ls === false) {
      lsfee = 0;
    }
    if (ps === true) {
      psfee = 175;
    }
    if (ps === false) {
      psfee = 0;
    }
    if (tx === true) {
      txfee = 30;
    }
    if (tx === false) {
      txfee = 0;
    }

    fee = lsfee + psfee + txfee;
    return fee;
  };

  const calculateExpense = (expenseList, income, lsfee, psfee, txfee) => {
    const bookingFee = parseFloat(income) * 0.1;
    const tax = parseFloat(income) * 0.14;
    const expenseAmounts = expenseList.map((expense) =>
      parseFloat(expense.expenseAmount)
    );
    const initialValue = 0;
    const additionalExpenses = expenseAmounts.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    const completeExpense =
      bookingFee +
      299 +
      tax +
      additionalExpenses +
      additionalServices(lsfee, psfee, txfee);

    return new Promise(function (resolve, reject) {
      resolve(parseFloat(completeExpense));
    });
  };

  const calculateIncome = (
    income,
    cleaningCost,
    ownCleanCost,
    numberOfCleanings
  ) => {
    const cleaningIncome = (ownCleanCost - cleaningCost) * numberOfCleanings;
    const combinedIncome = parseFloat(income) + parseFloat(cleaningIncome);
    return new Promise(function (resolve, reject) {
      resolve(combinedIncome);
    });
  };

  useEffect(() => {
    scroll(0, 0);
  }, []);

  useEffect(() => {
    const calculatedIncome =
      parseFloat(mainForm?.averageNightlyRate) * parseInt(mainForm?.monthDays);
    setGrossIncome(calculatedIncome);
  }, [expenses, mainForm]);

  const handleMainFormChange = (e) => {
    const { name, value } = e.target;
    setMainForm({ ...mainForm, [name]: value });
  };

  const addExpenseForm = document.getElementById("addExpenseForm");

  const addExpense = (e) => {
    let expenseList = expenses || [];
    if (expense?.expenseName && expense?.expenseAmount) {
      expenseList.push(expense);
      setExpenses(expenseList);

      addExpenseForm.reset();
      setExpense(null);
      setIdCount(idCount + 1);
    }
  };

  const handleExpenseChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value, id: idCount });
  };

  const removeExpense = (id) => {
    let expenseList = expenses;
    const index = expenseList.map((ex) => ex.id).indexOf(id);
    if (index > -1) {
      expenseList.splice(index, 1);
    }
    // if (expenses.length === 0) {
    //   setExpenses([]);
    // }
    setExpenses([...expenseList]);
    console.log(expenses);
  };

  return (
    <Container>
      <Row>
        <Col>
          <NearbyCard
            title={"Vacation Property Income Analysis"}
            subtitle="This tool calculates a monthly average of what you can potentially make anually."
            text={
              <div>
                <Formik
                  initialValues={{
                    cleaningFee: 0,
                    averageNightlyRate: 0,
                    cleaningsAmount: 4,
                    ownerCleaningCost: "",
                    monthDays: 23,
                    landscaping: false,
                    poolService: false,
                    taxFile: false,
                  }}
                  validateOnChange
                  validationSchema={validationSchema}
                  onSubmit={(values) => {
                    calculateIncome(
                      grossIncome,
                      parseFloat(values.cleaningFee),
                      parseFloat(values.ownerCleaningCost),
                      parseFloat(values.cleaningsAmount)
                    ).then((res) => {
                      setIncomeTotal(parseFloat(res).toFixed(2));
                      calculateExpense(
                        expenses,
                        grossIncome,
                        values.landscaping,
                        values.poolService,
                        values.taxFile
                      ).then((resp) => {
                        setExpenseTotal(parseFloat(resp).toFixed(2));
                        location.href = "#totals";
                      });
                    });
                  }}
                >
                  {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                    isSubmitting,
                    resetForm,
                  }) => (
                    <Form
                      onSubmit={handleSubmit}
                      onChange={handleMainFormChange}
                      onBlur={handleMainFormChange}
                    >
                      <Form.Label htmlFor="cleaningFee">
                        How many rooms does your property have?
                      </Form.Label>
                      <Form.Select
                        value={values.cleaningFee}
                        name="cleaningFee"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option>Choose a number</option>
                        <option value={169}>3</option>
                        <option value={179}>4</option>
                        <option value={189}>5</option>
                        <option value={199}>6</option>
                      </Form.Select>
                      <p className="error">
                        {errors.cleaningFee &&
                          touched.cleaningFee &&
                          errors.cleaningFee}
                      </p>
                      <Form.Label htmlFor="averageNightlyRate">
                        What will be your average nightly rate for your
                        property?
                      </Form.Label>
                      <InputGroup>
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control
                          name="averageNightlyRate"
                          type="number"
                          value={values.averageNightlyRate}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </InputGroup>
                      <Form.Text>
                        Please contact Nearby Property Management for help
                        getting this number.
                      </Form.Text>
                      <p className="error">
                        {errors.averageNightlyRate &&
                          touched.averageNightlyRate &&
                          errors.averageNightlyRate}
                      </p>
                      <Form.Label htmlFor="monthDays">
                        How many days booked in a month?
                      </Form.Label>
                      <Form.Group as={Row}>
                        <Col xs="9">
                          <RangeSlider
                            tooltipPlacement="top"
                            max={30}
                            min={1}
                            name="monthDays"
                            value={values.monthDays}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            variant="primary"
                          />
                        </Col>
                        <Col xs={3}>
                          <Form.Control
                            max={30}
                            min={1}
                            name="monthDays"
                            value={values.monthDays}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="text-center"
                          />
                        </Col>
                        <Form.Text>
                          23 days is based on a 75% occupancy rate. Change and
                          adjust to calculate income at different occupancy
                          rates.
                        </Form.Text>
                        <p className="error">
                          {errors.monthDays &&
                            touched.monthDays &&
                            errors.monthDays}
                        </p>
                      </Form.Group>
                      <Form.Label htmlFor="ownerCleaningCost">
                        How much do you want to charge for cleanings?
                      </Form.Label>
                      <InputGroup>
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control
                          name="ownerCleaningCost"
                          type="number"
                          placeholder={
                            values.cleaningFee &&
                            `The minimum charge is $${values.cleaningFee}`
                          }
                          value={values.ownerCleaningCost}
                          min={values.cleaningFee}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </InputGroup>
                      <Form.Text>
                        Cleaning Fees are passed on to the guest. You can charge
                        more for additional income. ${values.cleaningFee || 169}{" "}
                        is the minimum charge based on the number of rooms
                        selected.
                      </Form.Text>
                      <p className="error">
                        {errors.ownerCleaningCost &&
                          touched.ownerCleaningCost &&
                          errors.ownerCleaningCost}
                      </p>
                      <Form.Label htmlFor="cleaningsAmount">
                        Total Cleanings A Month
                      </Form.Label>
                      <InputGroup>
                        <Form.Control
                          name="cleaningsAmount"
                          type="number"
                          value={values.cleaningsAmount}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </InputGroup>
                      <Form.Text>Assumes 4 bookings a month.</Form.Text>
                      <p className="error">
                        {errors.cleaningsAmount &&
                          touched.cleaningsAmount &&
                          errors.cleaningsAmount}
                      </p>
                      <Row className="mt-4">
                        <h3>Optional Services</h3>
                        <Col xs={12} sm={6} md={4}>
                          <Form.Check
                            name="landscaping"
                            type="switch"
                            label="Landscaping? $175"
                            value={values.landscaping}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <p className="error">
                            {errors.landscaping &&
                              touched.landscaping &&
                              errors.landscaping}
                          </p>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                          <Form.Check
                            name="poolService"
                            type="switch"
                            label="Pool Service? $175"
                            value={values.poolService}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <p className="error">
                            {errors.poolService &&
                              touched.poolService &&
                              errors.poolService}
                          </p>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                          <Form.Check
                            name="taxFile"
                            type="switch"
                            label="State and County Tax Filing? $30"
                            value={values.taxFile}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <p className="error">
                            {errors.taxFile &&
                              touched.taxFile &&
                              errors.taxFile}
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form
                            id="addExpenseForm"
                            className="mt-4"
                            onChange={handleExpenseChange}
                          >
                            <h3>Add monthly expenses</h3>
                            <Row>
                              <Col>
                                <Form.Group>
                                  <Form.Label className="mt-0">
                                    Expense Name
                                  </Form.Label>
                                  <Form.Control
                                    placeholder="ex. Mortgage, HOA Fees, etc."
                                    name="expenseName"
                                    type="text"
                                  />
                                </Form.Group>
                              </Col>
                              <Col>
                                <Form.Label className="mt-0">
                                  Expense Amount
                                </Form.Label>
                                <InputGroup>
                                  <InputGroup.Text>$</InputGroup.Text>
                                  <Form.Control
                                    name="expenseAmount"
                                    type="number"
                                  />
                                </InputGroup>
                              </Col>
                            </Row>
                            <Button
                              onClick={addExpense}
                              size="sm"
                              variant="secondary"
                              className="mt-2"
                            >
                              Add Expense
                            </Button>
                          </Form>
                          {expenses?.length > 0 && (
                            <Table striped bordered hover className="mt-2">
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Expense Name</th>
                                  <th>Expense Amount</th>
                                </tr>
                              </thead>
                              <tbody>
                                {expenses.length > 0 &&
                                  expenses.map((exp, i) => (
                                    <tr key={i}>
                                      <td>{(i + 1).toString()}</td>
                                      <td>{exp.expenseName}</td>
                                      <td>{`$${exp.expenseAmount}`}</td>
                                      <td>
                                        <span
                                          className="btn"
                                          onClick={() => removeExpense(exp.id)}
                                        >
                                          <i className="red fa-solid fa-trash"></i>
                                        </span>
                                      </td>
                                    </tr>
                                  ))}
                              </tbody>
                            </Table>
                          )}
                        </Col>
                      </Row>
                      <Row className="mt-4">
                        <Col>
                          <h5>Booking Fee: 10%</h5>
                          <h5>Monthly Management Fee: $299</h5>
                          <h5>Florida State and County Room Tax: 14%</h5>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Button size="lg" type="submit">
                            Calculate
                          </Button>
                        </Col>
                      </Row>
                      <Row className="mt-2">
                        <Col>
                          <Button
                            onClick={() => {
                              location.reload();
                            }}
                            variant="secondary"
                          >
                            Reset
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  )}
                </Formik>

                <NearbyCard
                  id="totals"
                  blue
                  text={
                    <Totals
                      totalExpense={expenseTotal}
                      totalIncome={incomeTotal}
                    />
                  }
                  className="mt-4 totalIncome"
                />
              </div>
            }
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Forecast;
