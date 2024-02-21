import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../../../../redux/features/Product/Product";
import { toast } from "react-toastify";
import { Table } from "reactstrap";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { BE_URL } from "../../../../../../config";
import { Delete, RemoveRedEyeOutlined } from "@mui/icons-material";

const StyleRow = ({ arr1, ele }) => {
  let available = arr1?.includes?.(`${ele}`) ? "black" : "gray";
  return (
    <span
      style={{
        border: `1px solid ${available}`,
        margin: "2px",
        borderRadius: "4px",
        color: available,
      }}
      className="p-1 rounded-1"
    >
      {ele}
    </span>
  );
};

export default function ProductTable({
  toggle,
  pagination,
  setTotalCount,
  setUpdateData,
}) {
  let [allProduct, setAllProduct] = useState([]);
  let [updateId, setUpdateId] = useSearchParams();

  let [useParams, setUseParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct({ page: pagination?.page, limit: 10 }));
  }, [pagination]);

  const data = useSelector((state) => state.productReducer);
  // console.log("---data-----", data.product);

  useEffect(() => {
    if (data.error.length > 0) {
      toast.error(data.error);
    }
    setAllProduct(data?.products);
    setTotalCount(data?.count);
  }, [data]);

  const deleteHandler = (id) => {
    console.log("----delete---", id);

    axios({
      method: "delete",
      url: `${BE_URL}/product/delete/${id}`,
      headers: {
        authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => {
        toast.success("Product Deleted");
        dispatch(fetchProduct({ page: pagination?.page, limit: 10 }));
      })

      .catch((err) => {
        toast.error(err.message);
      });
  };

  const updateHandler = (id) => {
    toggle();
    setUpdateId(id);
    // setUpdateData(true);
  };
  return (
    <div>
      {data.pending ? (
        <h1>fetching...!</h1>
      ) : (
        <>
          <Table striped>
            <thead>
              <tr>
                <th>SR</th>
                <th>image</th>
                <th>TITLE</th>
                <th>AVAILABLE STOCK</th>
                <th>Brand</th>
                <th>PRICE</th>
                <th>Gender</th>
                <th>DISCOUNT (%)</th>
                <th>Category</th>
                <th>SIZE</th>
                <th>COLOR</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {allProduct?.map?.((e, i) => {
                // console.log("--e--", e);
                return (
                  <tr key={e?._id}>
                    <th scope="row">{(pagination?.page - 1) * 10 + i + 1}</th>

                    <td>
                      <img
                        src={e?.thumbnail}
                        style={{ height: "80px", width: "80px" }}
                      />
                    </td>
                    <td>{e?.title}</td>

                    <td>{e?.stock || 0}</td>
                    <td>{e?.brand}</td>
                    <td>{e?.price || 0}</td>
                    <td>{e?.gender}</td>
                    <td>{e?.discountPercentage || 0}</td>
                    <td>{e?.category}</td>
                    <td>
                      {[42, 43, 44, 45, 46].map?.((ele, i) => {
                        return <StyleRow key={i} arr1={e.size} ele={ele} />;
                      })}
                    </td>
                    <td>
                      {e?.color?.map?.((col) => {
                        return (
                          <span
                            style={{
                              border: "1px solid darkgray",
                              display: "inline-block",
                              width: "20px",
                              height: "20px",
                              margin: "3px",

                              backgroundColor: col,
                            }}
                            className="border rounded-2 "
                          ></span>
                        );
                      })}
                    </td>
                    <td className="hand" style={{}}>
                      <RemoveRedEyeOutlined
                        role="button"
                        onClick={() => updateHandler(e?._id)}
                      />

                      <Delete
                        role="button"
                        onClick={() => deleteHandler(e?._id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <h1>{pagination?.totalProduct}</h1>
        </>
      )}
    </div>
  );
}
