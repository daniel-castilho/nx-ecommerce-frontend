export default () => (
    <footer>
        Daniel The Entreprenerd - © { new Intl.DateTimeFormat('en', { year: 'numeric' }).format(Date.now()) }
    </footer>
)