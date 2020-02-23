import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default ArticleScreen = props => {
  const ARTICLE_URL = props.navigation.getParam('article');
  if (ARTICLE_URL === undefined) {
    return <div style={styles.container}>エラーが発生しました</div>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: ARTICLE_URL }} />
    </SafeAreaView>
  );
};
