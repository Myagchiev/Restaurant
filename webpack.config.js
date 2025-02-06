const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    entry: './src/js/index.js', // Точка входа
    output: {
      path: path.resolve(__dirname, 'dist'), // Папка для финальной сборки
      filename: 'main.js', // Имя итогового JS файла
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,  // Обработка CSS файлов
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader', // В режиме разработки используем style-loader, в продакшн — MiniCssExtractPlugin
            'css-loader',
          ],
        },
        {
          test: /\.scss$/, // Обработка SCSS файлов
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader', // В продакшн режим используем MiniCssExtractPlugin
            'css-loader',  // Чтобы интерпретировать файлы .css
            'sass-loader', // Для компиляции SCSS в CSS
          ],
        },
        // Правила для обработки изображений и иконок
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]', // Используем хеш для избежания кеширования
                outputPath: 'assets/images', // Папка для изображений в финальной сборке
                publicPath: 'assets/images', // Путь, по которому доступна картинка
              },
            },
          ],
        },
        // Правила для обработки шрифтов (если они есть)
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]',
                outputPath: 'assets/fonts', // Папка для шрифтов
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'assets/css/style.css', // Убедись, что стиль экспортируется в папку assets/css
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html', // Шаблон HTML для вставки сгенерированных файлов
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),  // Папка для статических файлов
      },
      compress: true,
      port: 9000,
      hot: true,
      open: true,
      historyApiFallback: true,
    },
    mode: isProd ? 'production' : 'development', // Устанавливаем режим сборки
  };
};
