module.exports = {
    'mode': 'development',
    'entry': './src/index.jsx',
    'output': {
        'filename': 'bundle.js',
        'path': __dirname + '/dist', // eslint-disable-line
    },

    'devtool': 'source-map',

    'resolve': {
        'extensions': [
            '.jsx',
            '.js',
            '.json'
        ]
    },

    'module': {
        'rules': [
            {
                'test': /\.jsx?$/,
                'loader': 'babel-loader',
                'exclude': '/node_modules/',
            },
            { 'enforce': 'pre',
                'test': /\.js$/,
                'loader': 'source-map-loader' },
            {
                'test': /\.scss$/,
                'use': [
                    'style-loader',
                    { 'loader': 'css-loader',
                        'options': { 'sourceMap': true } },
                    { 'loader': 'sass-loader',
                        'options': { 'sourceMap': true } }
                ]
            },
            {
                'test': /\.(png|svg|jpg|gif)$/,
                'use': ['file-loader']
            }
        ]
    },

    'externals': {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};
