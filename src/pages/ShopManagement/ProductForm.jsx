import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addProduct, updateProduct } from "../../redux/slices/productSlice";
import "./ProductForm.css";

const ProductForm = ({ product, isEditing, onUpdate, onClose }) => {
  const dispatch = useDispatch();

  const initialValues = isEditing
    ? { id: product.productId, ...product }
    : {
        name: "",
        price: "",
        discountPrice: "",
        stockQuantity: "",
        imageUrl: "",
        description: "",
        category: "",
      };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Product name is required"),
    price: Yup.number()
      .positive("Price must be positive")
      .required("Price is required"),
    stockQuantity: Yup.number().integer("Quantity must be an integer"),
    imageUrl: Yup.string()
      .url("Must be a valid URL")
      .required("Image URL is required"),
    description: Yup.string(),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    if (isEditing) {
      const { id, ...productData } = values;
      await dispatch(updateProduct({ id, productData })).unwrap();
      onUpdate();
    } else {
      await dispatch(addProduct(values)).unwrap();
      onUpdate();
    }
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors }) => (
        <Form>
          <div className="form-flex-container">
            <div className="form-field-group">
              <Field
                name="name"
                type="text"
                placeholder={product.name || "Name"}
                className="form-input-2"
              />
              <ErrorMessage name="name" component="div" />
            </div>
            <div className="form-field-group">
              <Field
                name="price"
                type="number"
                placeholder={product.price || "Price"}
                className="form-input-1"
              />
              <ErrorMessage name="price" component="div" />
            </div>
            <div className="form-field-group">
              <Field
                name="discountPrice"
                type="number"
                placeholder={product.discountPrice || "Discount Price"}
                className="form-input-1"
              />
              <ErrorMessage name="discountPrice" component="div" />
            </div>
            <div className="form-field-group">
              <Field
                name="stockQuantity"
                type="number"
                placeholder={product.stockQuantity || "Stock Quantity"}
                className="form-input-1"
              />
              <ErrorMessage name="quantity" component="div" />
            </div>
            <div className="form-field-group">
              <Field
                name="imageUrl"
                type="text"
                placeholder={product.imageUrl || "Image URL"}
                className="form-input-2"
              />
              <ErrorMessage name="imageUrl" component="div" />
            </div>
            <div className="form-field-group">
              <Field
                name="description"
                as="textarea"
                placeholder={product.description || "Description"}
                className="form-input-description"
              />
              <ErrorMessage name="description" component="div" />
            </div>
            <div className="form-field-group">
              <Field
                name="category"
                as="select"
                placeholder={product.category || "Category"}
                className="form-input-1"
              />
              <ErrorMessage name="category" component="div" />
            </div>
            {errors.general && <div>{errors.general.title}</div>}
          </div>
          <button type="submit" disabled={isSubmitting} className="form-button">
            {isEditing ? "Update Product" : "Add Product"}
          </button>
          <button type="button" onClick={onClose} className="close-form-button">
            Close Form
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ProductForm;
