import { Formik, Field, ErrorMessage } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button, Checkbox, Form, Label } from 'semantic-ui-react'
import { FormField } from 'semantic-ui-react'
import BerkLinuxTextInput from '../utilities/customFormControls/BerkLinuxTextInput'

export default function CarAdd() {

    const initialValues = { carName: "", unitPrice:0 }

    const schema = Yup.object({
        carName: Yup.string().required("Car name required."),
        unitPrice: Yup.number().required("Enter price.")
    })


    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema} onSubmit = {(values) => {

                }}
            >
                <Form>
                    <BerkLinuxTextInput name = "carName" placeholder="Car Name"/>
                    <BerkLinuxTextInput name = "unitPrice" placeholder="Unit Price"/>
                    {/* <FormField> */}
                        {/* <Field name = "carName" placeholder="Car Name"></Field>
                        <ErrorMessage name="carName" render={error=>
                            <Label pointing basic color="red" content={error}></Label>
                        }></ErrorMessage> */}
                        {/* <Field name = "unitPrice" placeholder="Price"></Field>
                        <ErrorMessage name="unitPrice" render={error=>
                            <Label pointing basic color="red" content={error}></Label>
                        }></ErrorMessage>
                    </FormField> */}
                    <Button color="blue" type="submit">Save Car</Button>
                </Form>
            </Formik>
        </div>
    )
}