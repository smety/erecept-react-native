import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Touchable} from 'react-native';

export default class App extends React.Component {
  render() {
      const doSomething = () => {
          alert("(Im)pressed")
      }

      return (
      <View style={styles.container}>
        <Text>Ahoj!</Text>

          <Button
              onPress={doSomething}
              title="Kuk"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
          />

          <ScrollView>
          <Text>Lorem ipsum, consectetuer adipiscing elit. Quisque tincidunt scelerisque libero. Praesent in mauris eu tortor porttitor accumsan. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Donec quis nibh at felis congue commodo. Pellentesque pretium lectus id turpis. Curabitur bibendum justo non orci. Mauris metus. Nulla pulvinar eleifend sem. Vestibulum fermentum tortor id mi. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Integer malesuada. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Fusce tellus. Maecenas aliquet accumsan leo.

          </Text>

          <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque tincidunt scelerisque libero. Praesent in mauris eu tortor porttitor accumsan. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Donec quis nibh at felis congue commodo. Pellentesque pretium lectus id turpis. Curabitur bibendum justo non orci. Mauris metus. Nulla pulvinar eleifend sem. Vestibulum fermentum tortor id mi. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Integer malesuada. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Fusce tellus. Maecenas aliquet accumsan leo.

          </Text>

          <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque tincidunt scelerisque libero. Praesent in mauris eu tortor porttitor accumsan. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Donec quis nibh at felis congue commodo. Pellentesque pretium lectus id turpis. Curabitur bibendum justo non orci. Mauris metus. Nulla pulvinar eleifend sem. Vestibulum fermentum tortor id mi. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Integer malesuada. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Fusce tellus. Maecenas aliquet accumsan leo.

          </Text>

          <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque tincidunt scelerisque libero. Praesent in mauris eu tortor porttitor accumsan. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Donec quis nibh at felis congue commodo. Pellentesque pretium lectus id turpis. Curabitur bibendum justo non orci. Mauris metus. Nulla pulvinar eleifend sem. Vestibulum fermentum tortor id mi. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Integer malesuada. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Fusce tellus. Maecenas aliquet accumsan leo.

          </Text>

          <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque tincidunt scelerisque libero. Praesent in mauris eu tortor porttitor accumsan. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Donec quis nibh at felis congue commodo. Pellentesque pretium lectus id turpis. Curabitur bibendum justo non orci. Mauris metus. Nulla pulvinar eleifend sem. Vestibulum fermentum tortor id mi. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Integer malesuada. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Fusce tellus. Maecenas aliquet accumsan leo.

          </Text>
          </ScrollView>
      </View>
    );
  }

  handleClick = () => {
      alert('Jsi pan?');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
