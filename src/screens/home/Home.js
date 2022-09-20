import { View, Text, Image } from "react-native";
import styles from "./Home.styles";
import { Button, InputWithLabel } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import numberImages from "../../../assets/img";
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
} from "../../features/counter/counterSlice";
import { odd, even } from "../../features/image/imageSlice";
import { useEffect, useState } from "react";

export default function Home({ navigation }) {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const image = useSelector((state) => state.imager.value);

  const [inputNumber, setInputNumber] = useState(0);

  const handleInputOnChange = (value) => {
    setInputNumber(value);
  };

  useEffect(() => {
    if (count % 2 !== 1) {
      dispatch(even());
    } else {
      dispatch(odd());
    }
  }, [count]);

  return (
    <View style={styles.container}>
      <Image
        source={image === "even" ? numberImages.even : numberImages.odd}
      ></Image>
      <View style={styles.input}>
        <InputWithLabel
          labelText={"Enter Amount"}
          keyboardType={"number-pad"}
          onChange={(value) => handleInputOnChange(Number(value))}
          value={inputNumber}
        />
      </View>
      <View style={styles.txtContainer}>
        <Text style={styles.txt}>{count}</Text>
      </View>
      <View style={styles.btn}>
        <Button labelText={"+"} onPress={() => dispatch(increment())} />
        <Button labelText={"-"} onPress={() => dispatch(decrement())} />
      </View>
      <View style={styles.centerBtn}>
        <Button
          labelText={"Increment by value"}
          onPress={() => {
            dispatch(incrementByAmount(inputNumber));
            setInputNumber("");
          }}
        />
        <Button
          labelText={"Increment async"}
          onPress={() => {
            dispatch(incrementAsync(inputNumber));
            setInputNumber("");
          }}
        />
      </View>
    </View>
  );
}
