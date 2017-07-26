/****** SSMS 中 SelectTopNRows 命令的指令碼  ******/
SELECT *
FROM [ShoppingCart].[dbo].[Order] a
INNER JOIN OrderDetail b
on a.MerchantTradeNo = b.MerchantTradeNo