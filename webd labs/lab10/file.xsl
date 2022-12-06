<?xml version="1.0" encoding="UTF-8"?> 
<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml"> <xsl:template match = "menu"> 
<html style="background:#FCE2DB"> 
<h2> Menu </h2> 
<xsl:for-each select="food"> 
<span style = "font-weight:900; color:blue">Name: </span> 
<xsl:value-of select = "name"/> 
<br/> 
<span style = "font-weight:900; color:olive">Price: </span> 
<xsl:value-of select = "price"/> 

<br/> 
<span style = "font-weight:900;color:red">description: </span> 
<xsl:value-of select = "description"/> 
<br/> 
<span style = "font-style: calibri;color:purple;font-weight:500">calories: </span> 
<xsl:value-of select = "calories"/> 
<br/> 
<br/> 
</xsl:for-each> 
</html> 
</xsl:template> 
</xsl:stylesheet> 
