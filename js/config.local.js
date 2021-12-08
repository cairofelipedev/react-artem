const config = {
  USERMAIL: "${{ secrets.USERMAIL }}",
  PASSMAIL: "${{ secrets.USERPASS }}",
  NEXT_PUBLIC_GA_ID: "${{ secrets.NEXT_PUBLIC_GA_ID }}"
}

module.exports = config